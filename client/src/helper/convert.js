// image into base 64 so that we can store image  in mongo database
export default function ConvertToBase64(file){
    return new Promise((resolve,reject)=>{
        const filereader= new FileReader();
        filereader.readAsDataURL(file);
        filereader.onload=()=>{
            resolve(filereader.result);
        }
        filereader.onerror=(error)=>{
            reject(error);
        }
    })

    

}