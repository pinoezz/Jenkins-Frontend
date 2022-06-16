def secret = 'pinoezz'
def server = 'https://jenkins.alfino.studentdumbways.my.id/'
def directory = 'wayshub-frontend'
def branch = 'master'

pipeline{
	agent any
	stages{
	    stage ('compose down and pull'){
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
	stage ('build images'){
            steps{
                sshagent([secret]) {
                    sh """ssh -o StrictHostkeyChecking=no ${server} << EOF
                    cd ${directory}
                    docker-compose build
		    exit
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
       
