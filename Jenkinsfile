pipeline {
    agent any
    stages {        
        stage ('install packages') {
            steps {
               nodejs('node') { 
                sh 'npm install'
               }
            }
        }
        
        stage ('build the app') {
            steps {
                nodejs('node') {
                 sh 'npm run build'
                }
            }
        }
        
        stage ('deploy to the server') {
            steps {
              sshagent(credentials: ['stagging']) {

                sh 'rsync -rvu * stagging@192.168.1.25:/home/stagging/3D'
                sh 'ssh stagging@192.168.1.25 sshpass -f passwd.txt rsync -rvu -e ssh /home/stagging/3D/* nc98db5@172.81.119.188:/home/nc98db5/360virtualsimulation.com/3D '
                                       
                }
            }
        }
    }
}