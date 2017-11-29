package com.example.service;

import com.example.bean.Expenditure;
import com.example.bean.MaterialStock;
import com.example.bean.User;
import com.example.dao.mapper.ExpenditureMapper;
import com.example.dao.mapper.MaterialStockMapper;
import com.example.dao.mapper.MaterialStockQueryMapper;
import com.example.dao.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MaterialService {

    @Autowired
    private MaterialStockMapper materialStockMapper;

    @Autowired
    private MaterialStockQueryMapper materialStockQueryMapper;

    @Autowired
    private ExpenditureMapper expenditureMapper;

    public List<MaterialStock> query(){
        return materialStockQueryMapper.query();
    }

    public int save(MaterialStock materialStock) {
        return materialStockMapper.insertSelective(materialStock);
    }

    public MaterialStock queryById(Integer id){
        return materialStockMapper.selectByPrimaryKey(id);
    }

    public void saveExpenditure(Expenditure expenditure){
        expenditureMapper.insertSelective(expenditure);
    }


    public void update(MaterialStock materialStock){
        materialStockMapper.updateByPrimaryKeySelective(materialStock);
    }
}