
import Sequelize from 'sequelize'

export const name = 'List'

const fields = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    group: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    payload: {
        type: Sequelize.JSONB,
        defaultValue: {},
    },
}

const options = {
    tableName: 'rel_lists',
    freezeTableName: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
        {
            unique: true,
            fields: [
                'group',
                'title',
            ],
        },
    ],
}

export const populate = (conn, Model) => async () => {
    for (const item of require('./list.model.fixture').default) {
        await Model.create(item)
    }
}

export const init = (conn) => {
    const Model = conn.define(name, fields, options)
    Model.populate = populate(conn, Model)
    return Model.sync()
}

export const start = async (conn, Model) => {
    await conn.handler.query(`TRUNCATE ${options.tableName} RESTART IDENTITY CASCADE;`)
    await Model.populate()
}
