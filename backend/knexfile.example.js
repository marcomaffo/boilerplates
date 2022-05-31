module.exports = {
    development: {
        client: "postgresql",
        connection: {
            database: 'my_db',
            user:     'postgres',
            password: 'password',
            host: 'localhost',
            port: 5432,
        },
        migrations: {
            tableName: "knex_migrations"
        }
    },
    production: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    },
};  