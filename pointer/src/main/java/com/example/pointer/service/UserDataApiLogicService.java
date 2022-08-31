package com.example.pointer.service;

import com.example.pointer.ifc.CrudInterface;
import com.example.pointer.model.entity.UserData;
import com.example.pointer.model.network.Header;
import com.example.pointer.model.network.request.UserDataApiRequest;
import com.example.pointer.model.network.response.UserDataApiResponse;
import com.example.pointer.repository.UserDataRepository;
import com.example.pointer.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class UserDataApiLogicService implements CrudInterface<UserDataApiRequest, UserDataApiResponse> {

    @Autowired
    private UserDataRepository userDataRepository;

    @Autowired
    private UserRepository userRepository;
    @Override
    public Header<UserDataApiResponse> create(Header<UserDataApiRequest> request) {

        UserDataApiRequest userDataApiRequest = request.getData();

        UserData userData = UserData.builder()
                .eyePos(userDataApiRequest.getEyePos())
                .eyeBlink(userDataApiRequest.getEyeBlink())
                .nodRl(userDataApiRequest.getNodRl())
                .nodFr(userDataApiRequest.getNodFr())
                .stt(userDataApiRequest.getStt())
                .createdAt(LocalDateTime.now())
                .createdBy("ADMINUSER")
                .user(userRepository.getReferenceById(userDataApiRequest.getUserId()))
                .build();
        UserData newData = userDataRepository.save(userData);
        return response(newData);
    }

    @Override
    public Header<UserDataApiResponse> read(Long id) {
        return userDataRepository.findById(id)
                .map(user->response(user))
                .orElseGet(()->Header.ERROR("데이터 없음"));
    }

    @Override
    public Header<UserDataApiResponse> update(Header<UserDataApiRequest> request) {
        return null;
    }

    @Override
    public Header delete(Long id) {
        Optional<UserData> optional = userDataRepository.findById(id);
        return optional.map(userData -> {
            userDataRepository.delete(userData);
            return Header.OK();
        }).orElseGet(()->Header.ERROR("데이터 없음"));
    }

    private Header<UserDataApiResponse> response(UserData userData){
        UserDataApiResponse userDataApiResponse = UserDataApiResponse.builder()
                .id(userData.getId())
                .eyePos(userData.getEyePos())
                .eyeBlink(userData.getEyeBlink())
                .nodRl(userData.getNodRl())
                .nodFr(userData.getNodFr())
                .stt(userData.getStt())
                .createdAt(userData.getCreatedAt())
                .createdBy(userData.getCreatedBy())
                .build();

        return Header.OK(userDataApiResponse);
    }
}
