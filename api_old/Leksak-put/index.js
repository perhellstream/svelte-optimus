module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // const product = {
    //     id: parseInt(req.params.id, 10),
    //     name: req.body.name,
    //     description: req.body.description,
    //     quantity: req.body.quantity,
    //   };
    
    //   try {
    //     const updatedProduct = data.updateProduct(product);
    //     context.res.status(200).json(updatedProduct);
    //   } catch (error) {
    //     context.res.status(500).send(error);
    //   }
    const responseMessage = "nothing being changed yet";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}