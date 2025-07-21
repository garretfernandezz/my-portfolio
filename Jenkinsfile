pipeline {
    agent any

    tools {
        nodejs "node18" // Ensure this matches Jenkins global tool config
    }

    stages {
        stage('Clone') {
            steps {
                git credentialsId: 'github-token', url: 'https://github.com/garretfernandezz/my-portfolio.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Checking current directory contents..."
                sh 'ls -la' // Ensures package.json is in the root directory
                echo "Installing npm packages..."
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo "Running tests..."
                sh 'npm test -- --watchAll=false' // Prevents interactive test hang
            }
        }

        stage('Build Project') {
            steps {
                echo "Building project..."
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo '✅ Build completed successfully!'
        }
        failure {
            echo '❌ Build failed. Please check the logs above.'
        }
    }
}
