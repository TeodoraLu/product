package com.example.dao.mapper;

import com.example.bean.OrderInfo;
import org.springframework.core.annotation.Order;

import java.util.List;
import java.util.Map;

public interface OrderInfoQueryMapper {
    List<OrderInfo> queryOrderInfo(Map<String,Object> param);
}