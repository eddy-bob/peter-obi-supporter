
var selectedimg: ArrayBuffer | undefined;
type FileType = {
       showpreview: boolean,
       selectedimg: ArrayBuffer,
       imagetype: string
}
const setValues = async (selectedim: ArrayBuffer) => {

       selectedimg = selectedim;

}
const chooseImage = async (
       event: any,
       notify: any): Promise<FileType | {}> => {
       const returnData = await new Promise((resolve, reject): void => {

              const imageData = new FileReader();
              const target = event.target.files[0];

              if (target && target.type.startsWith("image")) {
                     imageData.readAsDataURL(target);

                     imageData.onload = (e) => {
                            setValues(e.target!.result as ArrayBuffer)

                     };

                     imageData.onloadend = () => {

                            return resolve({

                                   selectedimg
                            })
                     }

              } else {
                     notify({
                            type: "error",
                            title: "Invalid format",
                            text: "File must be an image",
                     });

                     return
              }
       })

       return returnData as FileType
};

export default chooseImage