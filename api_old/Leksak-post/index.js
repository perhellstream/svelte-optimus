module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // const product = {
    //     id: undefined,
    //     name: req.body.name,
    //     description: req.body.description,
    //   };
    
    //   try {
    //     const newProduct = data.addProduct(product);
    //     context.res.status(201).json(newProduct);
    //   } catch (error) {
    //     context.res.status(500).send(error);
    //   }
    const responseMessage = "nothing being added yet";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}