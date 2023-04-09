const {create,getAppointmentList} = require("./appointment_list.service")
module.exports={
    createAppointment:(req,res)=>{
        const body = req.body
        create(body,(err,results)=>{
            if (err){
                return res.status(500).json({
                    success:0,
                    message:"An error occured!"
                })
            }
            return res.status(200).json({
                success:1,
                message:"Your comment has been posted.",
                data:results
            })
        })
    },
    getAppointmentList:(req,res)=>{
        
        getAppointmentList((err,results)=>{
            if (err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:"Some error occured while fetching the data."
                })

            }
            return res.status(200).json({
                success:1,
                data:results
            })
        })
    },
    deleteCommentById:(req,res)=>{
        const {id} = req.params
        deleteCommentById(id,(err,results)=>{
            if (err){
                return res.json({
                    success:0,
                    message:"An error occured!"
                })
            }
            return res.status(200).json({
                success:1,
                message:"The comment has been deleted."
            })
        })
        
    }
}