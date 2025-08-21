const mongoose = require('mongoose');



const studentSchema = mongoose.Schema({
    nim:{
        type:Number,
        required:true,
},
    nama:{
        type:String,
        required:[true, 'Please provide a name'],
        trim:true,
        maxLength:[20, 'name can not be more than 20']
},
    kelas:{
        type:String,
        required:[true, 'Harus punya kelas']
    },
    prodi:{
        type:String,
        required:[true, 'Harus punya prodi']
    },
    fakultas:{
        type:String,
        required:[true, 'Harus punya fakultas']
    },
    jenisKelamin:{
        type:String,
        enum:['Laki-Laki', 'Perempuan']
    },
    ipk:{
        type:Number,
        default:0
    },
    pwAkun:{
        type:String,
    },
    isPresent:{
        type:Boolean,
        default:false
    }

})


module.exports = mongoose.model('student', studentSchema)