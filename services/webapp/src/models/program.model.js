
import Sequelize from 'sequelize'

export const name = 'Program'

const fields = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    ownerId: {
        type: Sequelize.BIGINT,
        field: 'owner_id',
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
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: Sequelize.STRING,
    },
    // main problem that the program tries to solve
    // relate to "List" model "program-scope"
    scope: {
        type: Sequelize.SMALLINT,
        allowNull: false,
    },
    workouts: {
        type: Sequelize.JSONB,
        defaultValue: {},
    },
    payload: {
        type: Sequelize.JSONB,
        defaultValue: {},
    },
}

const options = {
    tableName: 'rel_programs',
    freezeTableName: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
        {
            unique: true,
            fields: [
                'owner_id',
                'slug',
            ],
        },
    ],
}

export const populate = (conn, Model) => async () => {
    for (const item of require('./program.model.fixture').default) {
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
