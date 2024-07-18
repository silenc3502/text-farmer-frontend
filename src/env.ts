interface Env {
    mode: string | undefined
    api: {
        MAIN_API_URL: string | undefined
        AI_BASE_URL: string | undefined
    },
    // s3: {
    //     AWS_REGION: string | undefined
    //     AWS_S3_IDENTITY_POOL_ID: string | undefined
    // }
}

const env: Env = {
    mode: process.env.MODE_ENV,
    api: {
        MAIN_API_URL: process.env.VUE_APP_BASE_URL,
        AI_BASE_URL: process.env.VUE_APP_AI_BASE_URL,
    },
    // s3: {
    //     AWS_REGION: process.env.VUE_APP_AWS_REGION,
    //     AWS_S3_IDENTITY_POOL_ID: process.env.VUE_APP_AWS_S3_IDENTITY_POOL_ID,
    // }
}

export default env