
const handlers = {}

export const addHandler = (name, data) => {
    if (handlers[name] !== undefined) {
        throw new Error(`[postgres] handler "${name}" already defined`)
    }

    handlers[name] = {
        ...data,
        models: {},
    }
}

export const getHandler = (name) => {
    if (handlers[name] === undefined) {
        throw new Error(`[postgres] handler "${name}" does not exists`)
    }

    return handlers[name]
}

export const pushModel = (conn, model) => {
    if (conn.models[model.name] !== undefined) {
        throw new Error(`[postgres] model "${model.name}" already defined in "${conn.name}"`)
    }

    conn.models[model.name] = model
}

export const getModel = (modelName, connectionName = null) => {
    const model = Object.keys(handlers)
        .filter(item => (
            connectionName
                ? item === connectionName
                : true
        ))
        .map(name => Object.values(handlers[name].models))
        .reduce((acc, models) => [ ...acc, ...models ], [])
        .find(item => item.name === modelName)

    if (!model) {
        const connStr = connectionName
            ? `${connectionName}`
            : 'ALL CONNECTIONS'
        throw new Error(`[postgres] model not found "${modelName}" in "${connStr}"`)
    }

    return model
}
