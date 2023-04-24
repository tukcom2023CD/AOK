package crepe.backend.domain.log.service;

import crepe.backend.domain.branch.domain.entity.Branch;
import crepe.backend.domain.branch.domain.repository.BranchRepository;
import crepe.backend.domain.branch.exception.NotFoundBranchEntityException;
import crepe.backend.domain.log.domain.entity.Log;
import crepe.backend.domain.log.domain.entity.Resource;
import crepe.backend.domain.log.domain.repository.LogRepository;
import crepe.backend.domain.log.domain.repository.ResourceRepository;
import crepe.backend.domain.log.dto.LogCreateRequest;
import crepe.backend.domain.user.domain.entity.User;
import crepe.backend.domain.user.domain.repository.UserRepository;
import crepe.backend.domain.user.exception.NotFoundUserEntityException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class LogService {
    private final LogRepository logRepository;
    private final UserRepository userRepository;
    private final BranchRepository branchRepository;

    public Log createLog(LogCreateRequest request) {
        Log log = createLogEntity(
                getBranchById(request.getBranchId()),
                getUserById(request.getUserId()),
                request.getMessage());

        return logRepository.save(log);
    }

    private Log createLogEntity(Branch branch, User user, String message) {
        return Log.builder().build();
    }

    private User getUserById(Long userId) {
        return userRepository.findUserByIdAndIsActiveTrue(userId).orElseThrow(NotFoundUserEntityException::new);
    }

    private Branch getBranchById(Long branchId) {
        return branchRepository.findBranchByIdAndIsActiveTrue(branchId).orElseThrow(NotFoundBranchEntityException::new);
    }

}
