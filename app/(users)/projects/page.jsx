import Projects from "@/components/Projects/Projects"

const ProjectsPage = async() =>{

    const this_proj_repo_token = process.env.GHB_PRJ_BRF_RO_TKN
    const res = await fetch(
    'https://raw.githubusercontent.com/gouravbhadra2001/MyProjectsNotable/main/portfolio_focus/projects_brief.json',
    {
      headers: {
        Authorization: `token ${this_proj_repo_token}` // Store your token in env for private repos
      },
      next: { revalidate: 5 } // optional: cache config
    }
  );

  const projectsData = await res.json();
  console.log(projectsData)
    return <>
    <Projects projects = {projectsData}/>
    </>
}

export default ProjectsPage
