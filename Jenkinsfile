pipeline {
    agent any

    tools {
        nodejs "node18"
    }

    stages {
        stage('Clone') {
            steps {
               git credentialsId: 'github-token', url: 'https://github.com/garretfernandezz/my-portfolio.git'

            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
