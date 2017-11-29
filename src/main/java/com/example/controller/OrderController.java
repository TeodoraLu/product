package com.example.controller;

import com.example.bean.User;
import com.example.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping(value = "/order")
public class OrderController extends GenericController{
    private static final Logger logger = LoggerFactory.getLogger(OrderController.class);

    @Autowired
    private UserService userService;

    //登录
    @RequestMapping(value = "/query",method = RequestMethod.GET)
    public void getUsers3(@RequestParam String username,@RequestParam String password, HttpServletRequest request, HttpServletResponse response) {
        //调用service方法得到用户列表
        User user = userService.getUsers(username,password);
        if(user==null||"".equals(user)){
            renderErrorString(response, "账号或密码错误");
        }else {
            renderSuccessString(response,user,"登录成功");
        }
    }


   /* //返回jsp视图展示
    @RequestMapping(value = "/getUserModel",method = RequestMethod.GET)
    public ModelAndView getUsers1(@RequestParam Integer userId) {
        ModelAndView modelAndView = new ModelAndView();
        //调用service方法得到用户列表
        User users = userService.getUsers(userId);
        //将得到的用户列表内容添加到ModelAndView中
        modelAndView.addObject("users",users);
        //设置响应的jsp视图
        modelAndView.setViewName("getUsers");
        logger.info("===============================成功查询用户列表！");
        return modelAndView;
    }
    //返回json格式数据，形式1
    @RequestMapping(value = "/getUserJson1",method = RequestMethod.GET)
    @ResponseBody
    public User getUsers2(@RequestParam Integer userId, HttpServletRequest request, HttpServletResponse response) {
        //调用service方法得到用户列表
        User users = userService.getUsers(userId);
        logger.info("==========================" +
                "=====成功查询用户列表！");
        return users;
    }

    //返回json格式数据，形式2（自定义了返回的格式）
    @RequestMapping(value = "/getUserJson2",method = RequestMethod.GET)
    public void getUsers3(@RequestParam Integer userId, HttpServletRequest request, HttpServletResponse response) {
        //调用service方法得到用户列表
        User users = userService.getUsers(userId);
        logger.info("===============================成功查询用户列表！");
        renderSuccessString(response, users);
    }*/
}