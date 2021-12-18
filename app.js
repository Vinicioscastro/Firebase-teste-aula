import { db } from "./firebase.js";
import firebase from "firebase";

console.log("Aula Firebase");

db.doc('pessoa/1').get().then(
  doc => {
    if (doc.exists) {
      console.log(doc.data().nome);
      console.log(doc.data().idade);

    } else {
      console.log("Aluno não encontrado");
    }
  }
);


console.log("------------------------")

db.doc(`pessoa/2`).get().then(
  doc => {
    if (doc.exists) {
      console.log("caiu aqui");
      console.log(doc.data());
    }
  }
);

db.doc(`disciplina/pdm`).get().then(
  doc => {
    if (doc.exists) {
      console.log("caiu aqui 2");
      console.log(doc.data());
    }
  }
)

console.log("------------------------")
db.doc(`pessoa/1`).get().then(
  doc => {
    if (doc.exists) {
      doc.data().disciplina.get().then(
        disc => {
          if (disc.exists) {
            console.log("caiu aqui 3");
            // console.log(doc.data())
            console.log(disc.data())
          }
        }
      )
    }
  }
)
console.log("------------------------")


// db.doc(`pessoa/1`).get().then(
//    doc => {
//      if(doc.exists){
//        doc.data().disciplina.get().then(
//          disc=>{
//            if(disc.exists){
//              console.log(disc.data().nome);
//            }
//          }
//        )
//      }
//    }
//  )

db.collection('pessoa').get().then(res =>
  res.forEach(doc => {
    if (doc.exists) {
      if (doc.data().idade > 18)
        console.log(doc.data().nome);
    }
  })
);

db.collection('disciplina').get().then(res=>
    res.forEach(doc=>{
        if(doc.exists){
        console.log(doc.data().nome);
        }
    })
);
console.log("atualizar interface");

// let ref1 = db.collection('alunos').doc('3');
// ref1.set({nome: 'Fulano', idade:18}).then(()=>console.log("Aluno inserido"));

// let ref1 = db.doc('alunos/3');
// ref1.set({nome: 'Beltrano'}).then(()=>console.log("Documento substituído"));

// let ref1 = db.doc('alunos/3');
// ref1.update({idade: 35}).then(()=>console.log("Documento atualizado"));

// let ref1 = db.doc('alunos/3');
// ref1.update({
//   idade: firebase.firestore.FieldValue.increment(1),
//   hora: firebase.firestore.FieldValue.serverTimestamp()
// }).then(()=>console.log("Dados atualizados"));

// let ref1 = db.doc('alunos/3');
// ref1.update({
//     hora: firebase.firestore.FieldValue.delete()
// }).then(()=>console.log("Campo removido"));

// db.doc('alunos/3').delete()
// .then(()=>
//     console.log("Aluno removido com sucesso"))
// .catch(e=>
//     console.log("Erro: "+e)
// );

// db.collection('alunos').where("nascimento","<=",new Date()).get().then(res=>
//     res.forEach(doc=>{
//         if(doc.exists){
//         console.log(doc.data().nome);
//         }
//     })
// );

// db.doc('alunos/2').get().then(aluno=>{
//     if(aluno.exists){
//         aluno.data().disciplinas.forEach(disc=>{
//             disc.get().then(doc=>{
//                 if(doc.exists){
//                     console.log(doc.data());
//                 }
//             })
//         })
//     }
// });
