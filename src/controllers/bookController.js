const getbookData= async function(req, res){
    let allBook=  await bookModel.find({authorName:"sk",isPublished:true}).count
    res.send({msg :allBook })
}


const createUser= async function(req, res){
    let myBooks=  await bookModel.find({authorName:"sk",isPublished:true})//.count
    res.send({msg :myBooks })
}