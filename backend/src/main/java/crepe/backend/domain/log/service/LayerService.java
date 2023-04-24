package crepe.backend.domain.log.service;

import crepe.backend.domain.log.domain.entity.Layer;
import crepe.backend.domain.log.domain.entity.Log;
import crepe.backend.domain.log.domain.entity.Resource;
import crepe.backend.domain.log.domain.repository.LayerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LayerService {
    private static LayerRepository layerRepository;
    public void createLayer(Log log, List<Resource> resources) {
        int index = 0;
        for(Resource resource:resources) {
            layerRepository.save(createLayerEntity(log, resource, index++));
        }
    }
    private Layer createLayerEntity(Log log, Resource resource, long sequence) {
        return Layer.builder()
                .log(log)
                .resource(resource)
                .sequence(sequence)
                .build();
    }
}
