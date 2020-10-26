module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    // const id = parseInt(req.params.id, 10);

    // try {
    //   data.deleteProduct(id);
    //   context.res.status(200).json({});
    // } catch (error) {
    //   context.res.status(500).send(error);
    // }
    let responseMessage = "deleted nothing for now."
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}