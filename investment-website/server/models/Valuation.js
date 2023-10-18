const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Import the Sequelize instance

// create our Valuation model
class Valuation extends Model {}

Valuation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Ticker: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    Assessment_Date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    previousClose: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: false,
    },
    marketCap: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    sharesOutstanding: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    Terminal_Rate: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: true,
    },
    WACC: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: true,
    },
    TerminalValue_CAGR: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    NPV_Total_CAGR: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    TerminalValue_NOM: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    NPV_Total_NOM: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    TerminalValue_CON: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    NPV_Total_CON: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    CAGR_CPS: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: true,
    },
    NOM_CPS: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: true,
    },
    CON_CPS: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: true,
    },
    Swing_NOM: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: true,
    },
    Swing_CAGR: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: true,
    },
    CONF_NOM: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: true,
    },
    CONF_CAGR: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    portfolio_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'portfolio',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    // underscored: true,
    modelName: 'valuation'
  }
);

module.exports = Valuation;