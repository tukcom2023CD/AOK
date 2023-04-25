package crepe.backend.domain.log.service;

import crepe.backend.domain.log.domain.entity.Layer;
import crepe.backend.domain.log.domain.entity.Log;
import crepe.backend.domain.log.domain.entity.Resource;
import crepe.backend.domain.log.domain.repository.LayerRepository;
import crepe.backend.global.exception.BusinessException;
import crepe.backend.global.response.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LayerService {

    private static LayerRepository layerRepository; // bean주입 안되는 이유를 찾아야 함

    public void createLayer(Log log, List<Resource> resources) {
        int index = 0;

        for(Resource resource:resources) {
            try {
                createLayerEntity(log, resource, index++);
            } catch(Exception e) {
                throw new BusinessException(ErrorCode.LAYER_CREATE_ERROR);
            }
        }

    }
    private void createLayerEntity(Log log, Resource resource, int sequence) {

        Layer layer = Layer.builder()
                .log(log)
                .resource(resource)
                .sequence(sequence)
                .build();

        layerRepository.save(layer);
    }
}
