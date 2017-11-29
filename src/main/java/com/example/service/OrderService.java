package com.example.service;

import com.example.bean.OrderInfo;
import com.example.bean.User;
import com.example.dao.mapper.OrderInfoQueryMapper;
import com.example.dao.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class OrderService {
    @Autowired
    private OrderInfoQueryMapper orderInfoQueryMapper;

    public List<OrderInfo> getOrder(String type) {
        Map<String,Object> param = new HashMap<String,Object>();
        param.put("type",type);
        return orderInfoQueryMapper.queryOrderInfo(param);
    }
}