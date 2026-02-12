pipeline {
    agent any

    environment {
        APP_SERVER = "ubuntu@3.131.83.155"
        APP_DIR = "/home/ubuntu/app"
    }
        }

        stage('Deploy to App Server') {
            steps {
                sshagent(['app-server-ssh']) {
                    sh """
                    ssh -o StrictHostKeyChecking=no ${APP_SERVER} '
                        cd ${APP_DIR} &&
                        git pull origin main &&
                        npm install &&
                        pm2 restart all || pm2 start app.js
                    '
                    """
                }
            }
        }
    }
}
