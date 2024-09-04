import config from '../config/index.js';

const test = async (req, res) =>{
    try{
        
        return res.status(200).json({
            status: 200,
            success: true,
            message: "test 성공",
            data: "test",
        });
    }catch(error){
        res.status(500).json({
            status: 500,
            success: false,
            message: '서버 오류',
        });
    }
};

export default {
    test
};