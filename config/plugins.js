module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'smtp.example.com'),
                port: env('SMTP_PORT', 587),
                auth: {
                    user: env('SMTP_USERNAME'),
                    pass: env('SMTP_PASSWORD'),
                },
            },
            settings: {
                defaultFrom: 'noreply@isoc.co.id',
                defaultReplyTo: 'noreply@isoc.co.id',
            },
        },
    },
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env('DO_SPACE_ACCESS_KEY'),
                secretAccessKey: env('DO_SPACE_SECRET_KEY'),
                endpoint: env('DO_SPACE_ENDPOINT'),
                params: {
                    Bucket: env('DO_SPACE_BUCKET'),
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    'fast-content': {
        enabled: true,
    },
    graphql: {
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: false,
            depthLimit: 7,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
            },
        },
    },
})
