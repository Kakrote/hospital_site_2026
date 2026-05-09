import fs from "fs";
import path from "path";

export type DepartmentConsultant = {
  name: string;
  designation: string;
  image?: string;
};

export type DepartmentWorkingHours = {
  title?: string;
  days?: string;
  time?: string;
};

export type DepartmentFAQ = {
  question: string;
  answer: string;
};

export type DepartmentContent = {
  overview?: string;
  department_Consultant?: DepartmentConsultant[];
  working_hours?: DepartmentWorkingHours;
  faq?: DepartmentFAQ[];
};

export type DepartmentRecord = {
  slug: string;
  routeSlug: string;
  title: string;
  description: string;
  image?: string;
  content?: DepartmentContent;
};

const departmentsFolder = path.join(process.cwd(), "data", "departments");

function normalizeSlug(value: string) {
  return value.trim().toLowerCase().replace(/_/g, "-");
}

export function getAllDepartments() {
  const files = fs
    .readdirSync(departmentsFolder)
    .filter((file) => file.endsWith(".json"));

  return files
    .map((file) => {
      const filePath = path.join(departmentsFolder, file);
      const parsed = JSON.parse(fs.readFileSync(filePath, "utf-8")) as DepartmentRecord;

      return {
        ...parsed,
        routeSlug: normalizeSlug(path.basename(file, ".json")),
      };
    })
    .sort((left, right) => left.title.localeCompare(right.title));
}

export function getDepartmentBySlug(slug: string) {
  const normalizedSlug = normalizeSlug(slug);

  return getAllDepartments().find(
    (department) =>
      normalizeSlug(department.routeSlug) === normalizedSlug ||
      normalizeSlug(department.slug) === normalizedSlug
  );
}
