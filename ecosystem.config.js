module.exports = {
    apps: [
        {
            name: "vipul-motors-main",
            script: "node_modules/next/dist/bin/next",
            args: "start -p 3002",
            cwd: "/home/ubuntu/vipul-motors/vipul-motors-main-app",
            env: {
                NODE_ENV: "production"
            }
        }
    ]
};