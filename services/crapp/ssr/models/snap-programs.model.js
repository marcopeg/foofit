
import Sequelize from 'sequelize'

export const name = 'SnapProgram'

const fields = {
    profileId: {
        type: Sequelize.BIGINT,
        field: 'profile_id',
        primaryKey: true,
    },
    programId: {
        type: Sequelize.BIGINT,
        field: 'program_id',
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    // caches the informations that are need to
    // display the program pages
    payload: {
        type: Sequelize.JSONB,
        defaultValue: {},
    },
    // caches the full definition of the planned trainings
    // (excepts for images and/or videos)
    trainings: {
        type: Sequelize.JSONB,
        defaultValue: {},
    },
    // cached exercises library for the full program
    exercises: {
        type: Sequelize.JSONB,
        defaultValue: {},
    },
    // caches the full history of workouts related
    // to this specific program
    workouts: {
        type: Sequelize.JSONB,
        defaultValue: {},
    },
}

const options = {
    tableName: 'snap_programs',
    freezeTableName: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
}

const getListByProfileId = (conn, Model) => async (profileId, lastUpdate = null) => {
    const where = { profileId }
    const attributes = [
        [ 'program_id', 'id' ],
        'title',
        [ Sequelize.json('payload.desc'), 'desc' ],
        'trainings',
        'exercises',
        'workouts',
        [ 'updated_at', 'lastUpdate' ],
    ]

    // get only fresh data
    if (lastUpdate) {
        const eta = new Date(lastUpdate)
        eta.setMilliseconds(eta.getMilliseconds() + 1)
        where.updated_at = { [Sequelize.Op.gt]: eta }
    }

    const res = await Model.findAll({
        where,
        attributes,
        raw: true,
    })

    // console.log(res)

    return res.map(item => ({
        ...item,
        lastUpdate: item.lastUpdate.toISOString(),
    }))
}

export const populate = (conn, Model) => async () => {
    for (const item of require('./snap-programs.model.fixture').default) {
        await Model.create(item)
    }
}

export const init = (conn) => {
    const Model = conn.define(name, fields, options)
    Model.getListByProfileId = getListByProfileId(conn, Model)
    Model.populate = populate(conn, Model)
    return Model.sync()
}

export const start = async (conn, Model) => {
    await conn.handler.query(`TRUNCATE ${options.tableName} RESTART IDENTITY CASCADE;`)
    await Model.populate()
}

