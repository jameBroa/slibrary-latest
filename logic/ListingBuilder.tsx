import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export function parseDocs(input:QueryDocumentSnapshot<DocumentData, DocumentData>[]) {
    input.map((doc) => {
        console.log(doc.data());
    })
}