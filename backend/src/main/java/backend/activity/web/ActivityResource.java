package backend.activity.web;

import backend.activity.model.Activity;
import backend.activity.model.ActivityCreateDto;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@Path("/activity")
@ApplicationScoped
public class ActivityResource {

    @Inject
    ActivityResourceFacade activityResourceFacade;

    @GET
    @Path("/{activityId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Activity getActivityById(@PathParam("activityId") final Long activityId) {
        return activityResourceFacade.getActivityById(activityId);
    }

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Activity> getAllActivities() {
        return activityResourceFacade.getAllActivities();
    }

    @POST
    @Path("/new")
    @Transactional
    @Produces(MediaType.APPLICATION_JSON)
    public Activity createNewActivity(final ActivityCreateDto activityCreateDto) {
        return activityResourceFacade.createNewActivity(activityCreateDto);
    }
}