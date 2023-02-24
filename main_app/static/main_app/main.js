const img_cont=new bootstrap.Modal(document.getElementById('img-cont'));
const m_body=document.getElementById("m-body");
const crop_btn=document.getElementById("crop-btn");
const img_input=document.getElementById("id_profile_pic");
const prev_cont=document.getElementById("prev");
img_input.addEventListener("change",()=>{
    img_cont.show();
    m_body.innerHTML="";
    const img_file=img_input.files[0];
    const url=URL.createObjectURL(img_file);
    const crop_img=document.createElement("img")
    crop_img.setAttribute("src",`${url}`);
    crop_img.style.width="100%";
    m_body.appendChild(crop_img);
    const cropper=new Cropper(crop_img,{
        autoCropArea: 1,
        viewMode: 1,
        scalable: true,
        zoomable: true,
        movable: true,
        modal:false,
        background:false,
        aspectRatio:1/1,
        mincontainerWidth: 550,
	    minContainerHeight: 550,
    })
    // cropper.on("ready",()=>{

    // })
    crop_btn.addEventListener("click",()=>{
        cropper.getCroppedCanvas().toBlob((blob)=>{
            if (prev_cont.firstElementChild){
                prev_cont.firstElementChild.remove()
            }
            let file=new File([blob],img_file.name,{type:"image/*"});
            let img_data=new DataTransfer();
            let img_url=URL.createObjectURL(file)
            img_data.items.add(file);
            img_input.files=img_data.files;
            let prev_img=document.createElement("img");
            prev_img.setAttribute("src",`${img_url}`);
            prev_img.style.width="100%";
            prev_img.style.height="auto";
            prev_cont.appendChild(prev_img);
        })
    })
})
