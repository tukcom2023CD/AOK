package crepe.backend.domain.user.domain.repository;

import crepe.backend.domain.user.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findUserByIdAndIsActiveTrue(Long userId);

    Optional<User> findUserByUuidAndIsActiveTrue(UUID uuid);
}
