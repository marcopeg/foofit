import Sequelize from 'sequelize'
import { encode } from 'services/hash'

export const name = 'Account'

const fields = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    uname: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    passw: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    // 0: pending
    // 1: confirmed
    // -1: deleted
    status: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        defaultValue: 0,
    },
}

const options = {
    tableName: 'rel_accounts',
    freezeTableName: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    hooks: {
        beforeCreate: async (user) => {
            user.passw = await encode(user.passw)
        },
        beforeUpdate: async (user) => {
            if (user.passw) {
                user.passw = await encode(user.passw)
            }
        },
    },
}

export const init = (conn) => {
    const Model = conn.define(name, fields, options)
    return Model.sync()
}

export const start = async (conn, Model) => {
    await Model.destroy({
        where: {},
        truncate: true,
    })
    for (const item of require('./account.model.fixture').default) {
        await Model.create(item)
    }
}
