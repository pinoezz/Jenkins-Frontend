def secret = 'pinoezz'
def server = 'jenkins@103.171.85.155'
def directory = 'wayshub-frontend'
def branch = 'master'

pipeline{
<<<<<<< HEAD
	agent any
	stages{
	    stage ('compose down and pull'){
=======
        agent any
        stages{
            stage ('compose down and pull'){
>>>>>>> a95140f0ed7d65b72451610b8a2e75c9070ff4ca
            steps{
                sshagent([secret]) {
                    sh """ssh -o StrictHostkeyChecking=no ${server} << EOF
                    cd ${directory}
                    docker-compose down
                    docker system prune -f
                    git pull origin ${branch}
                    exit
                    EOF"""
                }
            }
        }
<<<<<<< HEAD
	stage ('build images'){
=======
        stage ('build images'){
>>>>>>> a95140f0ed7d65b72451610b8a2e75c9070ff4ca
            steps{
                sshagent([secret]) {
                    sh """ssh -o StrictHostkeyChecking=no ${server} << EOF
                    cd ${directory}
                    docker-compose build
<<<<<<< HEAD
		    exit
=======
                    exit
>>>>>>> a95140f0ed7d65b72451610b8a2e75c9070ff4ca
                    EOF"""
                 }
             }
        }
        stage ('deploy'){
            steps{
                sshagent([secret]) {
                    sh """ssh -o StrictHostkeyChecking=no ${server} << EOF
                    cd ${directory}
                    docker-compose up -d
                    exit
                    EOF"""
                }
            }
        }
    }
}
<<<<<<< HEAD
       
=======
>>>>>>> a95140f0ed7d65b72451610b8a2e75c9070ff4ca
