module.exports={
     asyncErrorHandler: (fn) => (req, res, next)=> {
             return Promise.resolve (fn (req, res, next)).catch(next);
         }
    /*errorHandler: (fn) => {
        return (req, res, next) => {
            return Promise.resolve(fn(req, res, next)).catch(next)
        }
    }*/
    }
