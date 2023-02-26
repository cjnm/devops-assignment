module.exports = {
    apps: [
        {
            name: 'devops-backend',
            script: './dist/index.js',
            cwd: process.env.PWD,
            instances: process.env.APP_INSTANCES || 2,
            max_restarts: 5,
            min_uptime: '30s',
            wait_ready: true,
            restart_delay: 2000,
            max_memory_restart: '500M',
            listen_timeout: 10000
        }
    ]
};
