const pool = require("../database")
require("dotenv").config()

module.exports = {
    create:(data,callback)=>{
        pool.query(`INSERT INTO appointment_list VALUES(?,?,?,?,?,?,?,?)`,[data.id,data.name,data.phone,data.color,data.licenseNumber,data.engineNumber,data.appointmentDate,data.mechanicName],
        (error,results,fields)=>{
            if (error){
                return callback(error)
            }
            return callback(null,results)
        }
        )
    },
    getAppointmentList:(callback)=>{
        pool.query(`SELECT * FROM appointment_list`,[],
        (error,results,fields)=>{

            if (error){
                return callback(error)
            }
            return callback(null,results)
        })
    },
    deleteCommentById:(id,callback)=>{
        pool.query(`DELETE FROM appointment_list WHERE id = ? `,[id],
        (error,results,fields)=>{
            if (error){
                return callback(error)
            }
            return callback(null,error)
        }
        )
    }
}