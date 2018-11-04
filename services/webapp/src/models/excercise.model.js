
import Sequelize from 'sequelize'

export const name = 'Exercise'

const fields = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    ownerId: {
        type: Sequelize.BIGINT,
        field: 'profile_id',
        defaultValue: null,
    },
    // 0: draft
    // 1: active
    // -1: deleted
    status: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        defaultValue: 0,
    },
    payload: {
        type: Sequelize.JSONB,
        defaultValue: {},
    },
}

const options = {
    tableName: 'rel_exercises',
    freezeTableName: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
}

export const init = (conn) => {
    const Model = conn.define(name, fields, options)
    return Model.sync()
}
