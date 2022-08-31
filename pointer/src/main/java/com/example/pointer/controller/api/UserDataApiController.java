package com.example.pointer.controller.api;


import com.example.pointer.ifc.CrudInterface;
import com.example.pointer.model.network.Header;
import com.example.pointer.model.network.request.UserDataApiRequest;
import com.example.pointer.model.network.response.UserDataApiResponse;
import com.example.pointer.service.UserDataApiLogicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/userData")
public class UserDataApiController implements CrudInterface<UserDataApiRequest, UserDataApiResponse> {


    @Autowired
    private UserDataApiLogicService userDataApiLogicService;
    @Override
    @PostMapping("")
    public Header<UserDataApiResponse> create(@RequestBody Header<UserDataApiRequest> request) {
        return userDataApiLogicService.create(request);
    }

    @Override
    @GetMapping("{id}")
    public Header<UserDataApiResponse> read(@PathVariable(name = "id") Long id) {

        return userDataApiLogicService.read(id);
    }

    @Override
    @PutMapping("")
    public Header<UserDataApiResponse> update(@RequestBody Header<UserDataApiRequest> request) {

        return null;
    }

    @Override
    @DeleteMapping("{id}")
    public Header delete(@PathVariable(name = "id") Long id) {

        return userDataApiLogicService.delete(id);
    }


}
