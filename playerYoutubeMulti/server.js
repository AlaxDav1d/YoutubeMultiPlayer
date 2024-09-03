const Web = require('ws');

const server = new Web.Server({port:8080});
const users = [1];  
server.on('connection' , (ws)=>{     
     users.push(ws);
     console.log('Cliente conectado');
     ws.on('message', (message) =>{
          const string = message.toString();
          console.log(string)
          const usu = users.indexOf(ws);
          users.forEach( convi =>{
               if(convi !== ws && convi.readyState === Web.OPEN){
                    if(string === '1'){
                         const estado = 'iniciar';
                         convi.send(estado);
                    }else if(string === '2'){
                         const estado = 'pausar';
                         convi.send(estado);
                    }else{     
                         convi.send(usu + ':' + message);
                    }
               }
          });
     })
})
