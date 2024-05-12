import Puja1 from "../Models/Puja1.js";

export const createParchi = async (req, res) => {
    try {
        const { name, amount, number } = req.body

        const parchi = await new Puja1({ name, amount, number }).save()
        // alert("Chanda created")
        res.status(201).send({
            success: true,
            message: "Parchi kat gayi",
            parchi
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while creating parchi",
            error
        })
    }
}

export const getAllParchi = async (req, res) => {
    try {

        const chanda=await Puja1.find({})
        
        res.status(201).send({
            success:true,
            message:"fetched data succcessfully",
            chanda
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in fetching all the data",
            error
        })
    }
}