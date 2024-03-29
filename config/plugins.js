module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env('S3_ACCESS_KEY'),
                secretAccessKey: env('S3_SECRET_KEY'),
                region: env('S3_REGION'),
                params: {
                    Bucket: env('S3_BUCKET'),
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
})
