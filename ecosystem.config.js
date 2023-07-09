module.exports = {
    apps: [{
        script: 'npm start'
    }],

    deploy: {
        production: {
            key: 'key_portfolio.pem',
            user: 'ubuntu',
            host: '54.86.202.11',
            ref: 'origin/main',
            repo: 'https://github.com/SebasRomero/Portfolio.git',
            path: '/home/ubuntu',
            'pre-deploy-local': '',
            'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
            'pre-setup': '',
        }
    }
}