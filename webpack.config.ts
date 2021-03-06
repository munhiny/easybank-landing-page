/* eslint-disable no-use-before-define */
import path from "path";
import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const webpackConfig = (env:any): Configuration => ({
    entry: "./src/index.tsx",
    ...(env.production || !env.development
        ? {}
        : {
        devtool: "eval-source-map"
    }),
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        //@ts-ignore
        plugins: [new TsconfigPathsPlugin()]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                },
                exclude: /dist/
            },
            {
                test: /\.scss?$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env.PRODUCTION": env.production || !env.development,
            "process.env.NAME":
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            JSON.stringify(require("./package.json").name),
            "process.env.VERSION":
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            JSON.stringify(require("./package.json").version)
        }),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: "./src/**/*.{ts,tsx,js,jsx}" 
            }
        }),
        new MiniCssExtractPlugin({
            filename: env.development ? "[name].css" : "[name].hash.css",
            chunkFilename: env.development ? "[id].css" : "[id].[hash].css"
        })
    ]
})

export default webpackConfig;
