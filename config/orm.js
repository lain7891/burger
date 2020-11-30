const connection = require("../config/connection.js");

const orm = {
    selectAll: function(tableInput, colToSearch, valOfCol, cb) {
        var queryString = "SELECT * FROM ?? = ?";

        connection.query(queryString, [tableInput, colToSearch, valOfCol, cb], function(err, result){
            if(err) throw err;
            cb(result);
        });
    }

// };

// insertOne: function()

// };

// updateOne: function()

// };
};



module.exports = orm;