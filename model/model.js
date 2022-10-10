const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Partner = sequelize.define(
    "Partner",
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
    }
  );
  const Banner = sequelize.define(
    "Banner",
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
    }
  );
  const News = sequelize.define(
    "News",
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descript: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      newsType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      personPostID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // Other model options go here
    }
  );
  const Media = sequelize.define(
    "Media",
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      urlVideo: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      personPostID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // Other model options go here
    }
  );
  const Manager = sequelize.define(
    "Manager",
    {
      // Model attributes are defined here
      account: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      admin: {
        type: DataTypes.BOOLEAN,
        // allowNull defaults to true
      },
      newsID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mediaID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      // Other model options go here
    }
  );
  const Client = sequelize.define(
    "Client",
    {
      // Model attributes are defined here

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      loanType: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isLoan: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      storeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      // Other model options go here
    }
  );
  const Store = sequelize.define(
    "Store",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      addressID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      idMap: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      clientID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      // Other model options go here
    }
  );
  const Address = sequelize.define(
    "Address",
    {
      Street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      district: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // Other model options go here
    }
  );
};
