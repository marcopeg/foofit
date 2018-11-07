
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
    // exercise type
    // relate to "List" model "exercise-type"
    type: {
        type: Sequelize.SMALLINT,
        allowNull: false,
    },
    // main muscular group for the exercise
    // relate to "List" model "exercise-scope"
    scope: {
        type: Sequelize.SMALLINT,
        allowNull: false,
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

export const init = (conn) => {
    const Model = conn.define(name, fields, options)
    return Model.sync()
}

export const start = async (conn, Model) => {
    await Model.destroy({
        where: {},
        truncate: true,
    })
    for (const item of require('./exercise.model.fixture').default) {
        await Model.create(item)
    }
}
