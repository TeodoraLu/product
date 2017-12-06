package com.example.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by DL-NG-ZJ-0019 on 2017/11/23.
 */
public class GenericController {
    Gson gson = new GsonBuilder()
            .setDateFormat("yyyy-MM-dd HH:mm:ss")
            .serializeNulls()
            .create();
    protected Result result;
    /**
     * 客户端返回JSON字符串
     * @param response
     * @param object
     * @return
     */
    protected String renderSuccessString(HttpServletResponse response,Object object,String massge) {
        result = new Result();
        result.setCode("1");
        result.setData(object);
        result.setMessage(massge);
        return renderString(response,gson.toJson(result),"application/json");
    }
    protected String renderErrorString(HttpServletResponse response,String massge) {
        result = new Result();
        result.setCode("0");
        result.setData(null);

        result.setMessage(massge);
        return renderString(response,gson.toJson(result),"application/json");
    }

    protected String renderString(HttpServletResponse response, Object object) {
        return renderString(response, gson.toJson(object),"application/json");
    }

    /**
     * 客户端返回字符串
     * @param response
     * @param string
     * @return
     */
    protected String renderString(HttpServletResponse response, String string,String type) {
        try {
            response.reset();
            response.setContentType(type);
            response.setCharacterEncoding("utf-8");
            response.setHeader("Access-Control-Allow-Origin","*");
            response.getWriter().write((string));
            return null;
        } catch (IOException e) {
            return null;
        }
    }


}
